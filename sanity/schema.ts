import { type SchemaTypeDefinition } from "sanity"

import { games } from "./schemas/game"
import { media } from "./schemas/media"
import { tabs } from "./schemas/tabs"
import { categorys } from "./schemas/categorys"
import users from "./schemas/users"
import { feedbacks } from "./schemas/feedbaks"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [users, games, media, tabs, categorys, feedbacks],
}
