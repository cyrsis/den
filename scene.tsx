import * as DCL from 'metaverse-api'
// import Web3 from 'web3'


// This is an interface, you can use it to enforce the types of your state
export interface IState {
    isDoorClosed: boolean
}

export default class HouseScene extends DCL.ScriptableScene<any, IState> {
    // This is your initial state and it respects the given IState interface
    state = {
        isDoorClosed: false
    }


    async sceneDidMount() {

        // const provider = await this.getEthereumProvider();
        // const web3 = new Web3(provider);

        // web3.eth.getBlock(48, function (error: Error, result: any) {
        //     console.log("Eth block 48 (from scene)", result);
        // });

        this.eventSubscriber.on('door_click', () => {


            // setState() will update the state and trigger an update, causing the scene to rerender
            this.setState({isDoorClosed: !this.state.isDoorClosed})
        })
    }

    async render() {
        const doorRotation = {
            x: 0,
            y: this.state.isDoorClosed ? 0 : 90,
            z: 0
        }

        return (
            <scene position={{x: 5, y: 0, z: 5}}>
                <entity rotation={doorRotation} transition={{rotation: {duration: 1000, timing: 'ease-in'}}}>
                    <box id="door" scale={{x: 1, y: 2, z: 0.05}} position={{x: 0.5, y: 1, z: 0}} color="#00FF00"/>
                </entity>
                {/*<box position={{x: 2, y: 1, z: 0}} scale={{x: 2, y: 2, z: 0.05}} color="#0000FF"/>*/}
                {/*<box position={{x: -1, y: 1, z: 0}} scale={{x: 2, y: 2, z: 0.05}} color="#0000FF"/>*/}

                <gltf-model
                    position={{x: 0, y: -7, z: 0}}
                    scale={{x: 5, y: 5, z: 5}}
                    src="models/model.gltf"
                />

                <gltf-model
                    // position={{x: 10, y: -18, z: 80}}
                    // scale={{x: 20, y: 15, z: 20}}
                    src="models/cow.gltf"
                />

            </scene>
        )
    }
}
