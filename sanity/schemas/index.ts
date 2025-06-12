import { project } from './project'
import { teamMember } from './teamMember'
import { product } from './product'
import { partner } from './partner'
import { verticalMarket } from './verticalMarket'
import { manufacturer } from './manufacturer'
import { productCategory } from './productCategory'
import { blogPost } from './blogPost'
import { publication } from './publication'
import { service } from './service'
import { clientTestimonial } from './clientTestimonial'

export const schemaTypes = [
  // Core Business Schemas
  verticalMarket,
  manufacturer,
  product,
  productCategory,
  service,
  
  // People & Organizations
  teamMember,
  partner,
  clientTestimonial,
  
  // Content
  project,
  blogPost,
  publication,
] 