import { useEffect } from 'react'

export const SITE_URL = 'https://sparkfleet.fr'

export const DEFAULT_META = {
  title: 'SparkFleet — Fleet manager externalisé pour PME | Toulouse',
  description:
    'SparkFleet optimise et pilote la flotte automobile des PME. Audit, plan de transition et gestion externalisée. Conseil indépendant basé à Toulouse.',
  path: '/',
}

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/**
 * Le site est une SPA : les balises de index.html décrivent la landing pour
 * toutes les routes. On les réécrit au montage pour que chaque page ait son
 * propre titre, sa description et son URL canonique.
 */
export function usePageMeta({ title, description, path } = {}) {
  useEffect(() => {
    const meta = { ...DEFAULT_META, ...{ title, description, path } }

    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[name="twitter:title"]', 'content', meta.title)
    setMeta('meta[name="twitter:description"]', 'content', meta.description)
    setMeta('meta[property="og:url"]', 'content', SITE_URL + meta.path)
    setMeta('link[rel="canonical"]', 'href', SITE_URL + meta.path)
  }, [title, description, path])
}
