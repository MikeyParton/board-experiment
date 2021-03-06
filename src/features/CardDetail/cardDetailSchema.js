import { schema } from 'normalizr'

export const checklistItemSchema = new schema.Entity('checklistItems')
export const checklistSchema = new schema.Entity('checklists', { checklistItems: [checklistItemSchema] })

export const singleChecklistSchema = { checklist: checklistSchema }

export const checklistItemsListSchema = { checklistItems: [checklistItemSchema] }
