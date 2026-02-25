export const getImagePath = (path: string) => {
    return process.env.NODE_ENV === 'production' ? `/portfolio-antigravity${path}` : path;
};
