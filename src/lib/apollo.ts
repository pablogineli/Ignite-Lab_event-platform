import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri:"https://api-sa-east-1.graphcms.com/v2/cl4trrbiq077k01uo3ofverpm/master",
    cache: new InMemoryCache()
})
