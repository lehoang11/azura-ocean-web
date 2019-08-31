import React                 from 'react';
import { Link }              from 'react-router-dom';
import "../../assets/css/video.css"
import "../../assets/css/edu.css"
import queryString from 'query-string'
import SearchAPI from '../../api/searchApi'
import "../../assets/css/video.css"
import "../../assets/css/edulist.css"
import VideoList from "../../components/Search/VideoList"
import EduList from "../../components/Search/EduList"

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eduSearch: [],
            tutorialSearch :[],
            errors: null,
            isLoading: true,
          };
    }



    componentWillMount(){
        
    }

    componentDidMount() {
        this.searchFilter();
    }
    
    componentWillReceiveProps(){
        this.searchFilter();
    }

    searchFilter = () => {
        const query = new URLSearchParams(this.props.location.search);
        const q = query.get('q')
        const page = queryString.stringify({
            currentPage :1,
            pageSize :20
        });
        let params ='q='+ q+'&'+page
        this.searchService(params);
    }


    searchService(params){
        return SearchAPI.search(params).then(
            (res) => {
                if (res.data.code == 200) {
                    const tutorialDTO = res.data.data.tutorialDTO;
                    const eduDTO = res.data.data.eduDTO;
                    this.setState({
                        tutorialSearch: tutorialDTO,
                        eduSearch: eduDTO,
                        isLoading: false,
                    })
                }
            },
            (err) => {
                console.log("error get data");
                this.setState({
                    errors :err,
                    isLoading: true,
                })
            }
        )
    }


    render (){
        const query = new URLSearchParams(this.props.location.search);
        const q = query.get('q');
        console.log('q' + q);
        const { tutorialSearch , eduSearch, isLoading } = this.state;
        return (
        <div className="page-wrapper">
            <div className="page-content container-fluid">
                <section className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {(Array.isArray(eduSearch) && eduSearch.length) || (Array.isArray(tutorialSearch.content) && tutorialSearch.content.length) ? (
                            <h3>Result for {q}</h3>
                        ) :(<div>No search result </div>) }
                    </div>
                    
                    {isLoading ? (<p>loading</p>):(<div></div>) }
                    {(Array.isArray(eduSearch) && eduSearch.length) ?
                    (<div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                        <div className="section-title-box">
                            <div className ="section-title"> Edu
                            </div>
                        </div>
                    </div>):(<div></div>)
                    }
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {(Array.isArray(eduSearch) && eduSearch.length) ? <div><EduList eduList={eduSearch} /></div> :<div></div>}
                    </div>
                </section>
                <section className="row">
                    {(Array.isArray(tutorialSearch.content) && tutorialSearch.content.length) ?
                    (<div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                        <div className="section-title-box">
                            <div className ="section-title"> Video
                            </div>
                        </div>
                    </div>):(<div></div>)
                    }
                    <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
                        {(Array.isArray(tutorialSearch.content) && tutorialSearch.content.length) ? <div><VideoList tutorials={tutorialSearch.content} /></div> :<div></div>}
                    </div>
                </section>
            </div>
        </div>


    );
    }
}

  
export default Search;