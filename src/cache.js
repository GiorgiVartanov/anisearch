import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
    typePolicies: {
        Page: {
            fields: {
                media: {
                    keyArgs: [],
                    merge(existing, incoming) {
                        if (typeof existing === "undefined")
                            return [...incoming];
                        console.log("EXISTING", existing);
                        console.log("INCOMING", incoming);
                        return [...existing, ...incoming];
                    },
                },
                pageInfo: {
                    merge(existing, incoming) {
                        return incoming;
                    },
                },
            },
        },
    },
});
