/** @jsx h */

import h from '../../../../helpers/h'

export default function(editor) {
  editor.insertFragment(
    <document>
      <quote>
        <hashtag>fragment</hashtag>
      </quote>
    </document>
  )
}

export const input = (
  <value>
    <document>
      <paragraph>
        <link>
          wo<cursor />rd
        </link>
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        <link>wo</link>
        <hashtag>
          fragment<cursor />
        </hashtag>
        <link>rd</link>
      </paragraph>
    </document>
  </value>
)
