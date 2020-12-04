import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchPayloadData } from '../actions/payloadAction';
import PaginatonControls from './PaginationControl';
import './style.css';

class SpacePayloads extends React.Component {

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

        const entireApiData = this.props.payloadData;
        const indexOflastUser = currentPage * itemsPerPage;
        const indexOfFirstUser = indexOflastUser - itemsPerPage;
        const renderData = entireApiData.slice(indexOfFirstUser, indexOflastUser)
        return (
            <div className="container">
                <div>
                    <div className="mainData">
                        <h1>Payload Data</h1>
                        <div>
                        {renderData && renderData.map(item =>(
                            <div key={item.id}>
                                    <div className="missionTable">
                                        <div className="title"><span>Title: </span>{item.payload_id}</div>
                                        <div className="customers"><span>Customers: </span>{item.customers[ 0 ]}</div>
                                        <div className="payload_type"><span>Payload_type: </span>{item.payload_type}</div>
                                        <div className="nationality"><span>Nationality: </span>{item.nationality}</div>
                                        <div className="manufacturer"><span>Manufacturer: </span>{item.manufacturer}</div>
                                        <div className="mass_kg"><span>Payload_mass_kg: </span>{item.payload_mass_kg}</div>
                                        <div className="mass_lbs"><span>Payload_mass_lbs: </span>{item.payload_mass_lbs}</div>
                                    </div>
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
        payloadData: state.payloadData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: bindActionCreators(fetchPayloadData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpacePayloads);