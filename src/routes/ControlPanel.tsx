import React, { Component } from 'react';
import { Button, Link } from '@material-ui/core';


class ControlPanel extends Component {
    static propTypes: {};
    render() {
        return (
            <div>
            <Button variant="contained" color="primary">
              Hello World
            </Button>
                 <Link>Test
                 </Link>
            </div>
        );
    }
}


export default ControlPanel;