
import { createClient } from "next-sanity";

const client = createClient({
    projectId: 'm25bacsw',
    dataset: 'production',// or the name you chose in step 1
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2021-08-31',
})
