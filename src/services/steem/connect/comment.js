// import lodash helpers.
import { merge } from 'lodash-es'
// slugify helper.
import slugify from 'slugify'

// base metadata fields.
export const baseMetadata = {
  app: 'utopian/2.0',
  format: 'markdown'
}

// metadata generator.
export const generateMetadata = (meta, tags) => merge(merge(baseMetadata, meta), { tags })

export const generateOperations = (author, title, permlink = null, body = '', jsonMetadata = {}) => {
  // build comment data.
  let commentData = {
    parent_author: '',
    parent_permlink: 'utopian-io',
    author: author,
    permlink: permlink,
    title: title,
    body: body,
    json_metadata: JSON.stringify(jsonMetadata)
  }
  // build comment operation array.
  const comment = ['comment', commentData]

  // build comment options data array.
  const commentOptionsData = {
    author: author,
    permlink: permlink,
    allow_votes: true,
    max_accepted_payout: '1000000.000 SBD',
    percent_steem_dollars: 10000,
    allow_curation_rewards: true,
    extensions: [ [0, { beneficiaries: [{ account: 'utopian.pay', weight: 1500 }] }] ]
  }

  // build comment options operation.
  const commentOptions = ['comment_options', commentOptionsData]

  // return both operations to be broadcast at once.
  return [comment, commentOptions]
  // return this.broadcast([['comment', params]], cb);
}

// title slug.
export const slugifyTitle = (title) => slugify(title, { lower: true })