import React, { Component } from 'react'
import Newscomponent from './newscomponent'
import Spinner from './spinner' 
import PropTypes from 'prop-types'


export default class News extends Component {
  
    articles = [
      {
        "source": {
          "id": "engadget",
          "name": "Engadget"
        },
        "author": "Igor Bonifacic",
        "title": "Twitter hacker and crypto scammer sentenced to five years in prison",
        "description": "On Friday, a federal court sentenced Joseph James O’Conner\r\n to five years in prison for his involvement in the 2020 Twitter hack\r\n. Last month, the 24-year-old, known as PlugwalkJoe online, plead guilty\r\n to a host of cyber crimes, including carrying out a S…",
        "url": "https://www.engadget.com/twitter-hacker-and-crypto-scammer-sentenced-to-five-years-in-prison-205649771.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/AyF3IKBq4cDibrXjEisFbg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/8bb3bc70-ef14-11ed-beda-55f5a49aaab2.cf.jpg",
        "publishedAt": "2023-06-24T20:56:49Z",
        "content": "On Friday, a federal court sentenced Joseph James OConner\r\n to five years in prison for his involvement in the 2020 Twitter hack\r\n. Last month, the 24-year-old, known as PlugwalkJoe online, plead gui… [+1117 chars]"
      },
      
      
      
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "Bitcoin's dominance will almost double as regulators limit other cryptocurrencies, MicroStrategy's Michael Saylor says",
        "description": "\"Now I think that the public is beginning to realize that bitcoin is the next bitcoin,\" MicroStrategy's Michael Saylor told Bloomberg TV.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-market-share-sec-regulators-cryptocurrencies-binance-microstrategy-michael-saylor-2023-6",
        "urlToImage": "https://i.insider.com/62433c5115567f0019c05f49?width=1200&format=jpeg",
        "publishedAt": "2023-06-14T14:08:36Z",
        "content": "Michael SaylorMicrostrategy\r\n<ul>\n<li>Bitcoin's market dominance will nearly double, MicroStrategy's Michael Saylor said.</li>\n<li>That's as the regulatory crackdown will remove a number of other tok… [+2428 chars]"
      },
      
      
      
     
      {
        "source": {
          "id": "wired",
          "name": "Wired"
        },
        "author": "Lily Hay Newman, Andy Greenberg",
        "title": "9 Years After the Mt. Gox Hack, Feds Indict Alleged Culprits",
        "description": "Plus: Instagram’s CSAM network gets exposed, Clop hackers claim credit for MOVEit Transfer exploit, and a $35 million crypto heist has North Korean ties.",
        "url": "https://www.wired.com/story/mt-gox-indictment-security-roundup/",
        "urlToImage": "https://media.wired.com/photos/64838ea49a01d944fee35efc/191:100/w_1280,c_limit/9-Years-After-the-Mt.-Gox-Hack,-Feds-Indict-Alleged-Culprits-Security-GettyImages-1197093074.jpg",
        "publishedAt": "2023-06-10T13:00:00Z",
        "content": "Apple's Worldwide Developer's Conference this week included an array of announcements about operating system releases and, of course, the company's anticipated mixed-reality headset, Vision Pro. Appl… [+6306 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Matthew Fox",
        "title": "Bitcoin dips after the SEC reportedly says recent ETF applications from BlackRock and Fidelity are inadequate",
        "description": "The SEC welcomed revisions and updates from the asset managers and an eventual refiling of the application, taking into account the agency's feedback.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-sec-says-spot-etf-applications-blackrock-fidelity-inadequate-2023-6",
        "urlToImage": "https://i.insider.com/649f038dfd8a3e0019122191?width=1200&format=jpeg",
        "publishedAt": "2023-06-30T17:17:18Z",
        "content": "SEC Chair Gary GenslerEvelyn Hockstein/Associated Press\r\n<ul><li>Bitcoin fell 2% on Friday after the SEC reportedly said recent ETF applications are inadequate.</li><li>BlackRock and Fidelity recentl… [+2543 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "Bitcoin could surge 300% to $120,000 next year as miners reduce token sales, Standard Chartered says",
        "description": "\"On that basis, selling just 27% of BTC mined in Q1-2024 would generate the same absolute level of excess cash as selling 100% in Q2-2023.\"",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-120000-crypto-mining-profit-btc-sales-2023-7",
        "urlToImage": "https://i.insider.com/64abfc4b6d7e02001af89f93?width=1200&format=jpeg",
        "publishedAt": "2023-07-10T15:20:20Z",
        "content": "Bitcoin illustrationGetty Images\r\n<ul>\n<li>Bitcoin's price could reach $50,000 this year and $120,000 by the end of 2024, Standard Chartered said.</li>\n<li>The bank said bitcoin has additional upside… [+2551 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Phil Rosen",
        "title": "Michael Saylor touts a new massive bitcoin haul as MicroStrategy now 'hodls' $4.6 billion worth of tokens",
        "description": "The purchase of 12,333 bitcoins brings MicroStrategy's total stockpile to 152,333 tokens.",
        "url": "https://markets.businessinsider.com/news/currencies/michael-saylor-microstrategy-bitcoin-hodl-cryptocurrency-token-currency-bull-markets-2023-6",
        "urlToImage": "https://i.insider.com/649c2701ec2dd400195fbc13?width=1200&format=jpeg",
        "publishedAt": "2023-06-28T13:10:02Z",
        "content": "MicroStrategy CEO Michael SaylorJoe Raedle/Getty Images\r\n<ul>\n<li>Michael Saylor's MicroStrategy bought an additional 12,333 bitcoin, for about $347 million.</li>\n<li>That brings the company's total … [+2124 chars]"
      },
      
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "'Battle-tested' bitcoin could reach $200,000 as top Wall Street names jump in, Fundstrat's Tom Lee says",
        "description": "Fundstrat head of research Tom Lee expects bitcoin to keep climbing as the regulatory crackdown shifts the crypto market in the token's favor.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-forecast-crypto-currency-sec-blackrock-gains-tom-lee-fundstrat-2023-6",
        "urlToImage": "https://i.insider.com/5f4521b589aff80028ab7b9d?width=1200&format=jpeg",
        "publishedAt": "2023-06-26T14:51:47Z",
        "content": "Cindy Ord/Getty Images\r\n<ul>\n<li>Bitcoin could eventually rise to $200,000, Fundstrat's Tom Lee told CNBC.</li>\n<li>The token will get a boost from the regulatory crackdown on digital assets and from… [+2403 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Zahra Tayeb",
        "title": "BlackRock pushes for the first ever US spot bitcoin ETF - crypto bull Mike Novogratz thinks it could 'the best thing that could happen' for the world's largest cryptocurrency",
        "description": "The world's largest asset manager filed an application on Thursday to create the iShares Bitcoin Trust, with Coinbase as custodian, per the SEC.",
        "url": "https://markets.businessinsider.com/news/currencies/blackrock-first-spot-bitcoin-etf-btc-coinbase-sec-mike-novogratz-2023-6",
        "urlToImage": "https://i.insider.com/648c1cfa51ea980019d69830?width=1200&format=jpeg",
        "publishedAt": "2023-06-16T09:18:18Z",
        "content": "BlackRock headquarters.(Photo by Leonardo Munoz/VIEWpress)\r\n<ul>\n<li>BlackRock is seeking to launch the first spot bitcoin exchange-traded fund in the US, per an SEC filing. </li>\n<li>The world's lar… [+2165 chars]"
      },
      
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Theron Mohamed",
        "title": "US home prices are poised to tumble - while bitcoin may surge to $50,000 by December, crypto investor says",
        "description": "Steeper interest rates will hammer residential and commercial real estate, while mainstream support will boost bitcoin, ProChain's David Tamil said.",
        "url": "https://markets.businessinsider.com/news/currencies/house-prices-commercial-real-estate-interest-rates-bitcoin-crypto-prochain-2023-7",
        "urlToImage": "https://i.insider.com/5ba14a6a0ce5f519008b6400?width=1200&format=jpeg",
        "publishedAt": "2023-07-10T11:22:16Z",
        "content": "Elevated interest rates will pull down home prices, one investor says.David McNew/Getty Images\r\n<ul>\n<li>US real estate will crumble under the weight of higher interest rates, ProChain's David Tamil … [+2318 chars]"
      },

    ]

    static defaultProps={
      country:'in',
      category:'general'
    }
    
    static propTypes={
      country:PropTypes.string,
      category:PropTypes.string,
    }  
    constructor(){
      super();
      this.state = {
        articles: [],
        loading:false,
        page:1
      }
    }
    componentDidMount = async () => {
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bdcbde0a23a340aa83e3ba4f7c092422&pageSize=12`;
      let data= await fetch(url)
      let parseddata = await data.json();
      console.log(parseddata);
      this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults})
    }
    updatenews=async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bdcbde0a23a340aa83e3ba4f7c092422&page=${this.state.page}&pageSize=12`;
      this.setState({loading:true});
      let data= await fetch(url)
      let parseddata = await data.json();
      console.log(parseddata);
      this.setState({
        articles:parseddata.articles,
        loading:false
      })

    }

    handleNextclick=async ()=>{
      console.log("next");
      this.setState({page:this.state.page+1})
      this.updatenews();

    }

    handlePrevclick=async ()=>{
      console.log("prev");
      this.setState({page:this.state.page-1})
      this.updatenews();
    }
    
    render() { 

    return (
      <div className='container my-3'>
        <h2 className='text-center'>Daily news Headlines </h2>
        {this.state.loading&&<Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <Newscomponent title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} />
          </div>
          })}
                    
        </div>  
        <div className='d-flex justify-content-between container'>
        <button type="button" disabled={this.state.page<=1} class="btn btn-secondary" onClick={this.handlePrevclick}>&larr; Previous</button>
        <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/12)} class="btn btn-secondary" onClick={this.handleNextclick}>Next &rarr;</button>
      </div>         
      </div>
      
    )
  }
}
