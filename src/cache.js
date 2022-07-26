import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
    typePolicies: {
        Page: {
            fields: {
                media: {
                    keyArgs: false,
                    merge(existing = [], incoming) {
                        return [...existing, ...incoming];
                    },
                },
            },
        },
    },
});
// export const cache = new InMemoryCache({
//     typePolicies: {
//         Page: {
//             fields: {
//                 media: {
//                     keyArgs: [],
//                     merge(existing = [], incoming) {
//                         console.log("EXISTING ", existing);
//                         console.log("INCOMING ", incoming);
//                         return [...existing, ...incoming];
//                     },
//                 },
//                 pageInfo: {
//                     merge(existing, incoming) {
//                         return incoming;
//                     },
//                 },
//             },
//         },
//     },
// });
