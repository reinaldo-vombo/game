import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skKL1hDYEGHxHzQ4QKwieSjA5AX4Sd9XRYX3vjOd8XOwKd7mmSal0sQVHathTIoU7eKon9UteWRG1ZqnQaKJCLKTGQQlqN6rLRqpllTRd7xNsN99galNukMq4XzJQ6PKu1pvwMrXkc3lqdsXZcqLopO5dmuxc3ZnoKHqxf6R2ZJ26114Ksfy",
})
