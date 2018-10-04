import React from 'react';
import styled from 'styled-components';
import TabFrame from './TabFrame.jsx'
import ProductInfoBodyFrame from './tabs/product-info/ProductInfoBodyFrame.jsx'
import MaterialsAndEnvironmentFrame from './tabs/materials-environment/MatAndEnvBodyFrame.jsx';
import AssemblyAndDocumentsFrame from './tabs/assembly-documents/AssemblyAndDocumentsFrame.jsx';
import PackageDetailsBodyFrame from './tabs/package-details/PackageDetailsBodyFrame.jsx';
import RatingsBodyFrame from './tabs/ratings/RatingsBodyFrame.jsx'
import axios from 'axios';

const Container = styled.div`
  -webkit-font-smoothing: antialiased !important;
  float: left;
  text-align: left;
  font-family: Verdana, sans-serif;
  margin-top: 20px;
  padding-bottom: 1.04em;
  box-sizing: border-box;
  padding: 20px 15px;
  width: 1060px;
`;

const TabContainer = styled.div`
  border-bottom: 1px solid #bfbfbf;
  padding: 39px;
  padding-left: 0px;
`;

const Details = styled.div`
  display: block;
  font-size: 0.6em;
`;




class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabTitles: ['Product information', 'Materials and environment', 'Assembly & documents', 'Package details', 'Ratings'],
            keyFeatures: ['Is really cool and fun to use.', 'At the same time absolutely trash and horrible to use.', 'Hate the color, too bad.', "Leave a bad review we don't care and won't respond"],
            goodToKnow: ['Longer pieces of text that go into detail about specific features and what they do so you can learn things.', 'Each one of these needs to be separated and look great wow how cool.', 'Here I am adding more text when I said I wouldnt but I really want this to take up more room so I have to.', 'More text is great we need more text someone get me more text what will we do without more text will we starve oh no quick get the text.','Some more text because I need to fill up space not used by the not included section.', 'Last one I am adding, basically talking to myself this is wonderful I dont feel crazy at all','Everyone loves CSS it is the best thing every lets use more words', 'This one is going to be really long and bland because the rest of them seemed to be about the same lengh. Lets add some periods. Because the rest were run ons anyways.', 'Invest in a grammar book.'],
            careInstructions: ['A few lines here to tell you how to care for it wow.', 'Should work now that we are here okay cool.'],
            dimensions: {
                max: '1,000,000,000 lumens',
                width: 10,
                diameter: 23,
                cordLength: '10 ft',
                power: '10 w'},
            loading: true,
            activeTab: 0,
            product: null,
            reviews: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.generateRandomProductId = this.generateRandomProductId.bind(this);
    }

    generateRandomProductId() {
        return Math.floor((Math.random() * 5000000) + 1);
    }

    componentDidMount() {
        axios.get(`http://localhost:1337/product/${this.generateRandomProductId()}`)
        .then((response) => {
            console.log('Product', response.data[0])
            this.setState({product: response.data[0], loading: false});
            axios.get(`http://localhost:1337/reviews/${this.state.product.productId}`)
            .then((response) => {
                console.log('Reviews', response.data)
                this.setState({reviews: response.data})
            });
        });
    }

    handleClick(id) {
        this.setState({activeTab: id});
    }

    renderBody() {
        if(this.state.activeTab === 0) {
            return (<ProductInfoBodyFrame bullets={this.state.product.product_info.bullets} goodToKnow={this.state.product.product_info.good_to_know} careInstructions={this.state.product.product_info.care_instructions} dimensions={this.state.product.product_info.product_dimensions} />);
        } else if (this.state.activeTab === 1) {
            return (<MaterialsAndEnvironmentFrame materials={this.state.product.materials_env}/>);
        } else if (this.state.activeTab === 2) {
            return (<AssemblyAndDocumentsFrame />);
        } else if (this.state.activeTab === 3) {
            return (<PackageDetailsBodyFrame />);
        } else if (this.state.activeTab === 4) {
            return (<RatingsBodyFrame reviews={this.state.reviews}/>);
        }
    }

    render() {
        if(this.state.loading) {
            return (<div>Loading...</div>)
        } else {
            return <Container>
                <TabContainer>
                  {this.state.tabTitles.map((title, i) => (
                    <TabFrame
                      key={i}
                      title={title}
                      id={i}
                      activeTab={this.state.activeTab}
                      handleClick={this.handleClick}
                    />
                  ))}
                </TabContainer>
                <Details>{this.renderBody()}</Details>
              </Container>;
        }
    }
}


export default Frame;