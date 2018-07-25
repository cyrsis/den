import * as DCL from 'metaverse-api'


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

        // const requestManager = new RequestManager(web3.currentProvider)
        //
        // const myBalance = await requestManager.eth_getBalance(myAddress)

        this.eventSubscriber.on('door_click', () => {


            // setState() will update the state and trigger an update, causing the scene to rerender
            this.setState({isDoorClosed: !this.state.isDoorClosed})
        })

        this.eventSubscriber.on('rent_click', () => {
            // setState() will update the state and trigger an update, causing the scene to rerender

            console.log("rent Click")
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
                <entity  rotation={doorRotation} transition={{rotation: {duration: 1000, timing: 'ease-in'}}}>
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
                    position={{x: -5, y: 0, z: 23}}
                    scale={{x: 0.5, y: 0.5, z: 0.5}}
                    src="models/ElmTree.gltf"
                />


                {/*<gltf-model*/}
                {/*// position={{x: 10, y: -18, z: 80}}*/}
                {/*// scale={{x: 20, y: 15, z: 20}}*/}
                {/*src="models/cow.gltf"*/}
                {/*/>*/}

                <entity visible={true} >
                    {/*<box id="rent" scale={{x: 4, y: 1, z: 0.05}} position={{x: -2, y: 5.2, z: 1.5}} color="#00FFFF"  />*/}
                </entity>
                    <box scale={{x: 4, y: 1, z: 0.05}} position={{x: -2, y: 3.8, z: 1.5}} color="#00FF00"/>
                    <text
                        height={10}
                        opacity={0.5}

                        position={{x: -2, y: 3.8, z: 1}}
                        scale={{x: 5, y: 5, z: 5}}
                        value="Rent Me!" fontSize={90} color="white"></text>


            </scene>
        )
    }
}
