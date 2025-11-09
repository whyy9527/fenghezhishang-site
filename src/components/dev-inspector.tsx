'use client'

import React from 'react'
import { Inspector } from 'react-dev-inspector'

export default function DevInspector() {
  return <Inspector keys={['Shift', 'Command', 'C']} />
}
