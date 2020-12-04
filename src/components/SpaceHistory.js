import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchHistoryData } from '../actions/historyAction';
import './style.css';
import PaginatonControls from './PaginationControl';

class SpaceHistory extends React.Component {

    state = {
        currentPage: 1,
        itemsPerPage: 8
    }

    componentDidMount() {
        this.props.fetchData();
    }

    handleClick = (pageNumber) => {
        this.setState({ currentPage: pageNumber })
    }

    render() {
        const { currentPage } = this.state;
        const { itemsPerPage } = this.state;

        const entireApiData = this.props.history;
        const indexOflastUser = currentPage * itemsPerPage;
        const indexOfFirstUser = indexOflastUser - itemsPerPage;
        const renderData = entireApiData.slice(indexOfFirstUser, indexOflastUser)
        return (
            <div className="container">
                <div>
                    <div className="mainData">
                        <h1>History Data</h1>
                        <div>
                            {renderData && renderData.map(item => (
                                <div key={item.id} className="missionTable">
                                    <div className="title"><span>Title: </span>{item.title}</div>
                                    <div><span>flight_Number: </span>{item.flight_number}</div>
                                    <div className="description"><span>Details: </span>{item.details}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <PaginatonControls
                    perPage={itemsPerPage}
                    datalength={entireApiData.length}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: bindActionCreators(fetchHistoryData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceHistory);