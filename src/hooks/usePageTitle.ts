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

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    const full = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    document.title = full;
    setOgTitle(full);
    return () => {
      document.title = BASE_TITLE;
      setOgTitle(BASE_TITLE);
    };
  }, [title]);
};
