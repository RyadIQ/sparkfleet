-- Demandes de contact envoyées depuis le formulaire public de la landing page.
-- Insertion publique (rôle anon), lecture réservée au back-office.

create table if not exists public.contact_requests (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  prenom      text not null check (char_length(prenom) between 1 and 100),
  societe     text not null check (char_length(societe) between 1 and 200),
  email       text not null check (
                char_length(email) between 3 and 320
                and email like '%_@_%'
              ),
  flotte      text check (char_length(flotte) <= 100),
  message     text check (char_length(message) <= 5000),
  traite      boolean not null default false
);

comment on table public.contact_requests is
  'Demandes de contact du formulaire public. Insert public, lecture via service_role uniquement.';

create index if not exists contact_requests_created_at_idx
  on public.contact_requests (created_at desc);

alter table public.contact_requests enable row level security;

-- Insertion : ouverte à tous les visiteurs (clé anon).
drop policy if exists "Insertion publique des demandes" on public.contact_requests;
create policy "Insertion publique des demandes"
  on public.contact_requests
  for insert
  to anon, authenticated
  with check (true);

-- Aucune policy SELECT/UPDATE/DELETE : personne ne peut relire les demandes
-- avec la clé anon. Le back-office devra passer par service_role, qui
-- contourne RLS, ou par une policy dédiée à un rôle admin.

grant insert on public.contact_requests to anon, authenticated;
