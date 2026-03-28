import { useEffect } from 'react';

const BASE_TITLE = 'Thomas Woroniak Photography';

const setOgTitle = (value: string) => {
  let tag = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', 'og:title');
    document.head.appendChild(tag);
  }
  tag.content = value;
};

const setCanonical = (href: string) => {
  let tag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.href = href;
};

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    const full = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    document.title = full;
    setOgTitle(full);
    setCanonical(window.location.origin + window.location.pathname);
  }, [title]);
};
