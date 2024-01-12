import { type SchemaTypeDefinition } from "sanity"

import { games } from "./schemas/game"
import { productInfo } from "./schemas/productInfo"
import { tabs } from "./schemas/tabs"
import { categorys } from "./schemas/categorys"
import users from "./schemas/users"
import { feedbacks } from "./schemas/feedbaks"
import { skins } from "./schemas/skins"
import { blogs } from "./schemas/blog"
import { comment } from "./schemas/comment"
import { likes } from "./schemas/liks"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [users, games, productInfo, tabs, categorys, feedbacks, skins, likes, blogs, comment],
}
