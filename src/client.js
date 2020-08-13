import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "us3msdvj", // find this at manage.sanity.io
  dataset: "production", // this is from when we answered those question from 'sanity init'
  useCdn: true,
});
