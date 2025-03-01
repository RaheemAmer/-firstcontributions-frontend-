/**
 * @generated SignedSource<<a5b8e6e725172ffbb83540b3e6dc39a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type Id_StoryQuery$variables = {
  id: string
}
export type Id_StoryQueryVariables = Id_StoryQuery$variables
export type Id_StoryQuery$data = {
  readonly node: {
    readonly id?: string
    readonly contentJson?: string
    readonly createdBy?: {
      readonly ' $fragmentSpreads': FragmentRefs<'UserDetails_user'>
    }
    readonly ' $fragmentSpreads': FragmentRefs<'Comments_story'>
  } | null
}
export type Id_StoryQueryResponse = Id_StoryQuery$data
export type Id_StoryQuery = {
  variables: Id_StoryQueryVariables
  response: Id_StoryQuery$data
}

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'id',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'id',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'contentJson',
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: '__typename',
      storageKey: null,
    },
    v5 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 5,
      },
    ],
    v6 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'cursor',
      storageKey: null,
    },
    v7 = {
      alias: null,
      args: null,
      concreteType: 'PageInfo',
      kind: 'LinkedField',
      name: 'pageInfo',
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'endCursor',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'hasNextPage',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
    v8 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 20,
      },
    ]
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'Id_StoryQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: null,
          kind: 'LinkedField',
          name: 'node',
          plural: false,
          selections: [
            {
              kind: 'InlineFragment',
              selections: [
                v2 /*: any*/,
                v3 /*: any*/,
                {
                  alias: null,
                  args: null,
                  concreteType: 'User',
                  kind: 'LinkedField',
                  name: 'createdBy',
                  plural: false,
                  selections: [
                    {
                      args: null,
                      kind: 'FragmentSpread',
                      name: 'UserDetails_user',
                    },
                  ],
                  storageKey: null,
                },
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'Comments_story',
                },
              ],
              type: 'Story',
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'Id_StoryQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: null,
          kind: 'LinkedField',
          name: 'node',
          plural: false,
          selections: [
            v4 /*: any*/,
            v2 /*: any*/,
            {
              kind: 'InlineFragment',
              selections: [
                v3 /*: any*/,
                {
                  alias: null,
                  args: null,
                  concreteType: 'User',
                  kind: 'LinkedField',
                  name: 'createdBy',
                  plural: false,
                  selections: [
                    v2 /*: any*/,
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'handle',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'avatar',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'bio',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'GitContributionStats',
                      kind: 'LinkedField',
                      name: 'gitContributionStats',
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'issues',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'pullRequests',
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: v5 /*: any*/,
                      concreteType: 'BadgesConnection',
                      kind: 'LinkedField',
                      name: 'badges',
                      plural: false,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'BadgeEdge',
                          kind: 'LinkedField',
                          name: 'edges',
                          plural: true,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'Badge',
                              kind: 'LinkedField',
                              name: 'node',
                              plural: false,
                              selections: [
                                v2 /*: any*/,
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'displayName',
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'progressPercentageToNextLevel',
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'currentLevel',
                                  storageKey: null,
                                },
                                v4 /*: any*/,
                              ],
                              storageKey: null,
                            },
                            v6 /*: any*/,
                          ],
                          storageKey: null,
                        },
                        v7 /*: any*/,
                      ],
                      storageKey: 'badges(first:5)',
                    },
                    {
                      alias: null,
                      args: v5 /*: any*/,
                      filters: null,
                      handle: 'connection',
                      key: 'BadgeList__badges',
                      kind: 'LinkedHandle',
                      name: 'badges',
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: v8 /*: any*/,
                  concreteType: 'CommentsConnection',
                  kind: 'LinkedField',
                  name: 'comments',
                  plural: false,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'CommentEdge',
                      kind: 'LinkedField',
                      name: 'edges',
                      plural: true,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'Comment',
                          kind: 'LinkedField',
                          name: 'node',
                          plural: false,
                          selections: [
                            v2 /*: any*/,
                            v3 /*: any*/,
                            v4 /*: any*/,
                          ],
                          storageKey: null,
                        },
                        v6 /*: any*/,
                      ],
                      storageKey: null,
                    },
                    v7 /*: any*/,
                  ],
                  storageKey: 'comments(first:20)',
                },
                {
                  alias: null,
                  args: v8 /*: any*/,
                  filters: null,
                  handle: 'connection',
                  key: 'Comments_story__comments',
                  kind: 'LinkedHandle',
                  name: 'comments',
                },
              ],
              type: 'Story',
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '1a6e6e9e7fe1fb50f86079a8e58caea4',
      id: null,
      metadata: {},
      name: 'Id_StoryQuery',
      operationKind: 'query',
      text: 'query Id_StoryQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Story {\n      id\n      contentJson\n      createdBy {\n        ...UserDetails_user\n        id\n      }\n      ...Comments_story\n    }\n    id\n  }\n}\n\nfragment BadgeList_user on User {\n  badges(first: 5) {\n    edges {\n      node {\n        id\n        ...Badge_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Badge_node on Badge {\n  displayName\n  progressPercentageToNextLevel\n  currentLevel\n}\n\nfragment Bio_user on User {\n  id\n  bio\n}\n\nfragment Comments_story on Story {\n  comments(first: 20) {\n    edges {\n      node {\n        id\n        contentJson\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment UserDetails_user on User {\n  id\n  handle\n  avatar\n  ...Bio_user\n  gitContributionStats {\n    issues\n    pullRequests\n  }\n  ...BadgeList_user\n}\n',
    },
  }
})()

;(node as any).hash = '294bf19ecdaa154f68f38738abf9d6a7'

export default node
