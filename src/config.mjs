export default {
    title: "Homepage",
    titleSuffix: " | Pacamara ☕",
    description: "Aromatic brew, pure indulgence, exquisite satisfaction.Default description",
    defaultOgImage: "./defaultog.jpg",
    latestPosts: 3,
    postsPerPage: 3,
    url: "https://pacamara-astro-6y7xr.kinsta.page",
    social: {
        'dribbble': false,
        'facebook': false,
        'github': 'https://github.com/palmiak',
        'instagram': false,
        'mastodon': false,
        'pinterest': false,
        'skype': false,
        'twitter': 'https://twitter.com/palmiak_fp'

    }
}

// src/content/config.ts
import { defineCollection } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: ({ image }) => ({
        title: { type: 'string' },
        description: { type: 'string' },
        // Vous pouvez ajouter d'autres champs ici
    }),
});


const page = defineCollection({
    type: 'content',
    schema: ({ image }) => ({
        title: { type: 'string' },
        description: { type: 'string' },
        // Vous pouvez ajouter d'autres champs ici
    }),
});


export const collections = {
    blog,
    page
};



