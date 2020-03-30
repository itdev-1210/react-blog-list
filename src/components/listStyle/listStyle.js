import React, { Component } from 'react';
import './listStyle.scss';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { listStyleAction } from './../../actions/listStyleAction';
import InputBox from '../inputBox/InputBox'
import { postArticleAction } from '../../actions/postArticleAction'

class ListStyle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isopenForm: false,
            listStyle: {
                card: false,
                table: true,
            },
            formData: {
                author: '',
                avatar: '',
                desc: '',
                email: '',
                isRead: false,
                jobTitle: '',
                title: '',
                tags: ["Management", "UX"]
            },
        }
        this.listStyle = this.listStyle.bind(this);
        this.openForm = this.openForm.bind(this);
        this.upDateData = this.upDateData.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(listStyleAction("table"));
    }

    listStyle(listName) {
        let listStyle = {
            card: false,
            table: false,
        };
        listStyle[listName] = !listStyle[listName];
        this.setState({ listStyle: listStyle });
        this.props.dispatch(listStyleAction(listName));
    }

    upDateData(e, type) {
        let data = this.state.formData;
        data[e.target.name] = e.target.value;
        this.setState({ formData: data })
    }

    openForm() {
        let isopenForm = !this.state.isopenForm;
        this.setState({ isopenForm: isopenForm });
    }
    submitForm() {
        let isopenForm = !this.state.isopenForm;
        this.setState({ isopenForm: isopenForm });
        let data = this.state.formData;
        this.props.dispatch(postArticleAction(data));
    }

    render() {
        const { listStyle, isopenForm } = this.state;
        return (
            <div>
                <div style={{ display: "flex" }}>
                    <div className="list-style">
                        <div onClick={() => this.openForm()} className="list-style-name">
                            <p>Post Article</p>
                        </div>
                    </div>
                    <div className="list-style">
                        <div onClick={() => this.listStyle('card')} className={listStyle.card ? 'list-style-name active' : 'list-style-name'}>
                            <svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Content-Management-2" transform="translate(-1213.000000, -168.000000)" fill="#C7C9CB">
                                        <g id="view-buttons" transform="translate(1198.000000, 152.000000)">
                                            <g id="cards-icon" transform="translate(15.000000, 16.000000)">
                                                <path d="M4.64285714,1.39260013 C4.64285714,1.13631899 4.43485714,0.929251263 4.17857143,0.929251263 L1.39285714,0.929251263 C1.13633929,0.929251263 0.928571429,1.13631899 0.928571429,1.39260013 L0.928571429,4.17896109 C0.928571429,4.43477795 1.13633929,4.64347065 1.39285714,4.64347065 L4.17857143,4.64347065 C4.43485714,4.64347065 4.64285714,4.43477795 4.64285714,4.17896109 L4.64285714,1.39260013 Z M4.64285714,5.57156122 L0.928571429,5.57156122 C0.415767857,5.57156122 0,5.15580079 0,4.64347065 L0,0.929251263 C0,0.415992572 0.415767857,0 0.928571429,0 L4.64285714,0 C5.15589286,0 5.57142857,0.415992572 5.57142857,0.929251263 L5.57142857,4.64347065 C5.57142857,5.15580079 5.15589286,5.57156122 4.64285714,5.57156122 L4.64285714,5.57156122 Z M4.64285714,8.82127105 C4.64285714,8.56498991 4.43485714,8.35699363 4.17857143,8.35699363 L1.39285714,8.35699363 C1.13633929,8.35699363 0.928571429,8.56498991 0.928571429,8.82127105 L0.928571429,11.6073999 C0.928571429,11.863681 1.13633929,12.071213 1.39285714,12.071213 L4.17857143,12.071213 C4.43485714,12.071213 4.64285714,11.863681 4.64285714,11.6073999 L4.64285714,8.82127105 Z M4.64285714,13 L0.928571429,13 C0.415767857,13 0,12.5842396 0,12.071213 L0,8.35699363 C0,7.84443135 0.415767857,7.42843878 0.928571429,7.42843878 L4.64285714,7.42843878 C5.15589286,7.42843878 5.57142857,7.84443135 5.57142857,8.35699363 L5.57142857,12.071213 C5.57142857,12.5842396 5.15589286,13 4.64285714,13 L4.64285714,13 Z M12.0714286,1.39260013 C12.0714286,1.13631899 11.8634286,0.929251263 11.6071429,0.929251263 L8.82142857,0.929251263 C8.56514286,0.929251263 8.35714286,1.13631899 8.35714286,1.39260013 L8.35714286,4.17896109 C8.35714286,4.43477795 8.56514286,4.64347065 8.82142857,4.64347065 L11.6071429,4.64347065 C11.8634286,4.64347065 12.0714286,4.43477795 12.0714286,4.17896109 L12.0714286,1.39260013 Z M12.0714286,5.57156122 L8.35714286,5.57156122 C7.84433929,5.57156122 7.42857143,5.15580079 7.42857143,4.64347065 L7.42857143,0.929251263 C7.42857143,0.415992572 7.84433929,0 8.35714286,0 L12.0714286,0 C12.5844643,0 13,0.415992572 13,0.929251263 L13,4.64347065 C13,5.15580079 12.5844643,5.57156122 12.0714286,5.57156122 L12.0714286,5.57156122 Z M12.0714286,8.82127105 C12.0714286,8.56498991 11.8634286,8.35699363 11.6071429,8.35699363 L8.82142857,8.35699363 C8.56514286,8.35699363 8.35714286,8.56498991 8.35714286,8.82127105 L8.35714286,11.6073999 C8.35714286,11.863681 8.56514286,12.071213 8.82142857,12.071213 L11.6071429,12.071213 C11.8634286,12.071213 12.0714286,11.863681 12.0714286,11.6073999 L12.0714286,8.82127105 Z M12.0714286,13 L8.35714286,13 C7.84433929,13 7.42857143,12.5842396 7.42857143,12.071213 L7.42857143,8.35699363 C7.42857143,7.84443135 7.84433929,7.42843878 8.35714286,7.42843878 L12.0714286,7.42843878 C12.5844643,7.42843878 13,7.84443135 13,8.35699363 L13,12.071213 C13,12.5842396 12.5844643,13 12.0714286,13 L12.0714286,13 Z" id="Fill-1"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p>Cards</p>
                        </div>
                        <div onClick={() => this.listStyle('table')} className={listStyle.table ? 'list-style-name active' : 'list-style-name'}>
                            <svg width="15px" height="14px" viewBox="0 0 15 14" version="1.1">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.571897645">
                                    <g id="Content-Management-2" transform="translate(-1302.000000, -168.000000)" fill="#C7C9CB">
                                        <g id="view-buttons" transform="translate(1198.000000, 152.000000)">
                                            <g id="table-icon" transform="translate(104.000000, 16.000000)">
                                                <path d="M13.125,12.1875 L1.875,12.1875 C1.3575,12.1875 0.9375,11.765625 0.9375,11.25 C0.9375,10.734375 1.3575,10.3125 1.875,10.3125 L13.125,10.3125 C13.6425,10.3125 14.0625,10.734375 14.0625,11.25 C14.0625,11.765625 13.6425,12.1875 13.125,12.1875 L13.125,12.1875 Z M13.125,9.375 L1.875,9.375 C0.83953125,9.375 0,10.2140625 0,11.25 C0,12.2859375 0.83953125,13.125 1.875,13.125 L13.125,13.125 C14.1604688,13.125 15,12.2859375 15,11.25 C15,10.2140625 14.1604688,9.375 13.125,9.375 L13.125,9.375 Z M13.125,7.5 L1.875,7.5 C1.3575,7.5 0.9375,7.078125 0.9375,6.5625 C0.9375,6.046875 1.3575,5.625 1.875,5.625 L13.125,5.625 C13.6425,5.625 14.0625,6.046875 14.0625,6.5625 C14.0625,7.078125 13.6425,7.5 13.125,7.5 L13.125,7.5 Z M13.125,4.6875 L1.875,4.6875 C0.83953125,4.6875 0,5.5265625 0,6.5625 C0,7.5984375 0.83953125,8.4375 1.875,8.4375 L13.125,8.4375 C14.1604688,8.4375 15,7.5984375 15,6.5625 C15,5.5265625 14.1604688,4.6875 13.125,4.6875 L13.125,4.6875 Z M1.875,0.9375 L13.125,0.9375 C13.6425,0.9375 14.0625,1.359375 14.0625,1.875 C14.0625,2.390625 13.6425,2.8125 13.125,2.8125 L1.875,2.8125 C1.3575,2.8125 0.9375,2.390625 0.9375,1.875 C0.9375,1.359375 1.3575,0.9375 1.875,0.9375 L1.875,0.9375 Z M1.875,3.75 L13.125,3.75 C14.1604688,3.75 15,2.9109375 15,1.875 C15,0.8390625 14.1604688,0 13.125,0 L1.875,0 C0.83953125,0 0,0.8390625 0,1.875 C0,2.9109375 0.83953125,3.75 1.875,3.75 L1.875,3.75 Z" id="Fill-38"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p>Table</p>
                        </div>
                    </div>
                </div>
                {isopenForm ?
                    <div className="form">
                        <form>
                            <InputBox type="text" placeholder="Name" name="author" onUpdate={this.upDateData} />
                            <InputBox type="text" placeholder="Avatar" name="avatar" onUpdate={this.upDateData} />
                            <InputBox type="text" placeholder="desc" name="desc" onUpdate={this.upDateData} />
                            <InputBox type="email" placeholder="Email" name="email" onUpdate={this.upDateData} />
                            <InputBox type="text" placeholder="jobTitle" name="jobTitle" onUpdate={this.upDateData} />
                            <InputBox type="text" placeholder="title" name="title" onUpdate={this.upDateData} />
                            <div onClick={() => this.submitForm()} className="submit-btn">
                                <p>Submit</p>
                            </div>
                            <div onClick={() => this.openForm()} className="submit-btn">
                                <p>Cancle</p>
                            </div>
                        </form>

                    </div>
                    : ''}
                {isopenForm ? <div className="mask"></div> : ''}
            </div>

        )
    }
}

export default withRouter(connect((store) => {
    return {
        listStyle: store.listStyle.listStyle,
    };
})(ListStyle))