import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const token = import.meta.env.VITE_SANITY_API_TOKEN;

export const client = projectId ? createClient({
    projectId,
    dataset,
    apiVersion: '2023-05-03',
    token,
    useCdn: false,
    ignoreBrowserTokenWarning: true
}) : null;

// Only create builder if client exists
const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source) {
    if (!builder || !source) {
        // Return a mock object to prevent crashes on chained calls like .width().url()
        return {
            width: () => ({
                url: () => source || '' // Return the source string itself if it's already a URL (fallback)
            }),
            url: () => source || ''
        };
    }
    return builder.image(source);
}
