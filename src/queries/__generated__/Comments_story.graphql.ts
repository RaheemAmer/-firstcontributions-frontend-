/**
 * @generated SignedSource<<331e8c0130e2affc570e79f9da686b61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type Comments_story$data = {
  readonly comments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string
        readonly contentJson: string
      }
    } | null>
  }
  readonly id: string
  readonly ' $fragmentType': 'Comments_story'
}
export type Comments_story = Comments_story$data
export type Comments_story$key = {
  readonly ' $data'?: Comments_story$data
  readonly ' $fragmentSpreads': FragmentRefs<'Comments_story'>
}

const node: ReaderFragment = (function () {
  var v0 = ['comments'],
    v1 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    }
  return {
    argumentDefinitions: [
      {
        defaultValue: 20,
        kind: 'LocalArgument',
        name: 'count',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'cursor',
      },
    ],
    kind: 'Fragment',
    metadata: {
      connection: [
        {
          count: 'count',
          cursor: 'cursor',
          direction: 'forward',
          path: v0 /*: any*/,
        },
      ],
      refetch: {
        connection: {
          forward: {
            count: 'count',
            cursor: 'cursor',
          },
          backward: null,
          path: v0 /*: any*/,
        },
        fragmentPathInResult: ['node'],
        operation: require('./Comments_storyQuery.graphql'),
        identifierField: 'id',
      },
    },
    name: 'Comments_story',
    selections: [
      {
        alias: 'comments',
        args: null,
        concreteType: 'CommentsConnection',
        kind: 'LinkedField',
        name: '__Comments_story__comments_connection',
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
                  v1 /*: any*/,
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'contentJson',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: '__typename',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'cursor',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
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
        ],
        storageKey: null,
      },
      v1 /*: any*/,
    ],
    type: 'Story',
    abstractKey: null,
  }
})()

;(node as any).hash = '0d3f43bb7b5c1d45598fb121e396e39f'

export default node
