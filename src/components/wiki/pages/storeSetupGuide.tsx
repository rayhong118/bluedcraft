import { Component } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import testMD from "../data/test.md";

class StoreSetupGuidePage extends Component<any,any> {

  constructor(props:any) {
    super(props)

    this.state = { test: "error" }
  }

  componentDidMount() {
    fetch(testMD).then((response) => response.text()).then((text) => {
      this.setState({ test: text })
    })
  }

  render() {
    return (
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={this.state.test}/>
    )
  }
}

export default StoreSetupGuidePage;


