import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    pagination: {
        background: theme.palette.background.paper,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

const defaultButton = props => <button {...props}>{props.children}</button>;

class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.changePage = this.changePage.bind(this);

        this.state = {
            visiblePages: this.getVisiblePages(null, props.pages)
        };
    }

    static propTypes = {
        pages: PropTypes.number,
        page: PropTypes.number,
        PageButtonComponent: PropTypes.any,
        onPageChange: PropTypes.func,
        previousText: PropTypes.string,
        nextText: PropTypes.string
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.pages !== nextProps.pages) {
            this.setState({
                visiblePages: this.getVisiblePages(null, nextProps.pages)
            });
        }

        this.changePage(nextProps.page + 1);
    }

    filterPages = (visiblePages, totalPages) => {
        return visiblePages.filter(page => page <= totalPages);
    };

    getVisiblePages = (page, total) => {
        console.log('page', page, total)
        if (total < 7) {
            return this.filterPages([1, 2, 3, 4, 5, 6], total);
        } else {
            if (page % 5 >= 0 && page > 4 && page + 2 < total) {
                return [1, page - 1, page, page + 1, total];
            } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
                return [1, total - 3, total - 2, total - 1, total];
            } else {
                return [1, 2, 3, 4, 5, total];
            }
        }
    };

    changePage(page) {
        const activePage = this.props.page + 1;

        if (page === activePage) {
            return;
        }

        const visiblePages = this.getVisiblePages(page, this.props.pages);

        this.setState({
            visiblePages: this.filterPages(visiblePages, this.props.pages)
        });

        this.props.onPageChange(page - 1);
    }

    render() {
        const {PageButtonComponent = defaultButton, classes, pages, pageSizeOptions, pageSize, onPageSizeChange} = this.props;
        console.log('this.props', this.props)
        const activePage = this.props.page + 1;

        return (
            <Grid className={classes.pagination}>
                <Grid item className={classes.search}>
                    Search Field
                </Grid>
                <Grid item className={classes.changePage}>
                    <div className="Table__prevPageWrapper">
                        <PageButtonComponent
                            className="Table__pageButton"
                            onClick={() => {
                                if (activePage === 1) return;
                                this.changePage(activePage - 1);
                            }}
                            disabled={activePage === 1}
                        >
                            {this.props.previousText}
                        </PageButtonComponent>
                    </div>

                    {activePage} / {pages}

                    <div className="Table__nextPageWrapper">
                        <PageButtonComponent
                            className="Table__pageButton"
                            onClick={() => {
                                if (activePage === this.props.pages) return;
                                this.changePage(activePage + 1);
                            }}
                            disabled={activePage === this.props.pages}
                        >
                            {this.props.nextText}
                        </PageButtonComponent>
                    </div>
                </Grid>
                <Grid item className={classes.changeRow}>
                    <select value={pageSize} onChange={(e) => onPageSizeChange(Number(e.target.value))}>
                        {pageSizeOptions.map((option, index) => {
                            return <option key={index} value={option}>{option}</option>
                        })}
                    </select>
                </Grid>

            </Grid>
        );
    }
}


export default withStyles(styles)(Pagination);
