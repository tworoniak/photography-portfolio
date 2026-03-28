const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

if (import.meta.env.DEV && !CLOUD_NAME) {
  throw new Error(
    '[cloudinary] VITE_CLOUDINARY_CLOUD_NAME is not set.\n' +
      'Create a .env.local file with: VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name'
  );
}

type Options = {
  width?: number;
  quality?: string;
};

export const cldImage = (publicId: string, options: Options = {}) => {
  const { width = 1200, quality = 'auto' } = options;

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},q_${quality},f_auto/${publicId}`;
};
