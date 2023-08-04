import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { GradientCard } from '../src/components/GradientCard'

describe('Common render', () => {
    it('renders without crashing', () => {
        render(<GradientCard />)
    })
})