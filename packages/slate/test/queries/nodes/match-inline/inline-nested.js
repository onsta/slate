/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const input = (
  <editor>
    <block>
      one
      <inline>
        two<inline>three</inline>four
      </inline>
      five
    </block>
  </editor>
)

export const run = editor => {
  return Array.from(
    Editor.nodes(editor, { at: [], match: 'inline', mode: 'highest' })
  )
}

export const output = [
  [
    <inline>
      two<inline>three</inline>four
    </inline>,
    [0, 1],
  ],
]
