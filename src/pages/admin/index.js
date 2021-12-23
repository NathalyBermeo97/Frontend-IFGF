import React from 'react'
import { withPrivate } from '../../hocs/withPrivate'

const Admin = () => {
    return (
        <div>
            This is an admin page
        </div>
    )
}

export default withPrivate(Admin)
