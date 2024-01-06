import { type SchemaTypeDefinition } from "sanity"

import { product } from "./schemas/product-schema"
import { games } from "./schemas/game"
import { media } from "./schemas/media"
import { tabs } from "./schemas/tabs"
import { categorys } from "./schemas/categorys"
import users from "./schemas/users"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [users, games, media, tabs, categorys],
}
