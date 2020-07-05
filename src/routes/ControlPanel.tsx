import React, { Component } from 'react';
import { Button, Link, Paper } from '@material-ui/core';


class ControlPanel extends Component {
    static propTypes: {};
    render() {
        return (
            <div>
                <Paper>
                    <h1>Test</h1>
                </Paper>
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