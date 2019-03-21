import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {MuiThemeProvider} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import Grid from "@material-ui/core/Grid";
import {createTheme} from "./create-theme";
import AddIcon from "@material-ui/icons/Add";
import {QWButton,
    ModalConfirm,
    ModalResponse,
    Notification,
    Tag,
    UploadZone
} from "./ui-components";

function App({actions, selectedTheme}) {
    /**
     * Confirm Modal State
     */
    const [openModalConfirm, setOpenModalConfirm] = useState(false);
    const openModalConfirmHandler = () => setOpenModalConfirm(true);
    const closeModalConfirmHandler = () => setOpenModalConfirm(false);

    /**
     * Response Error Modal State
     */
    const [openModalErrorResponse, setOpenModalErrorResponse] = useState(false);
    const openModalErrorResponseHandler = () => {
        setResponseType("error");
        setOpenModalErrorResponse(true);
    };
    const closeModalErrorResponseHandler = () => {
        setResponseType("");
        setOpenModalErrorResponse(false);
    };

    /**
     * Response Success Modal State
     */
    const [openModalSuccessResponse, setOpenModalSuccessResponse] = useState(false);
    const [responseType, setResponseType] = useState("");
    const openModalSuccessResponseHandler = () => {
        setResponseType("success");
        setOpenModalSuccessResponse(true);
    };
    const closeModalSuccessResponseHandler = () => {
        setResponseType("");
        setOpenModalSuccessResponse(false);
    };


    const theme = createTheme(selectedTheme);


    return (
        <Grid container className="App">
            <MuiThemeProvider theme={theme}>
                <Grid container spacing={16} direction={"column"}>
                    <Grid item container spacing={8}>
                        <Grid item>
                            <Button style={{background: green[500], color: "white"}}
                                    onClick={() => actions.changeTheme({type: "green"})}>Change GREEN</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{background: purple[500], color: "white"}}
                                    onClick={() => actions.changeTheme({type: "purple"})}>Change PURPLE</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{background: orange[500], color: "white"}}
                                    onClick={() => actions.changeTheme({type: "orange"})}>Change ORANGE</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{background: blue[500], color: "white"}}
                                    onClick={() => actions.changeTheme({type: "blue"})}>Change BLUE</Button>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <h2>Button</h2>
                        <Grid container spacing={16} alignItems={"center"}>
                            <Grid item>
                                <QWButton variant={"outlined"} color="primary">
                                    Outlined
                                </QWButton>
                            </Grid>
                            <Grid item>
                                <QWButton disabled color={"primary"} variant={"outlined"}>
                                    Outlined Disabled
                                </QWButton>
                            </Grid>
                            <Grid item>
                                <QWButton disabled color={"primary"} variant={"contained"}>
                                    Contained
                                </QWButton>
                            </Grid>
                            <Grid item>
                                <QWButton variant={"contained"} color="primary">
                                    Contained Disabled
                                </QWButton>
                            </Grid>
                            <Grid item>
                                <QWButton color={"primary"} variant={"contained"}>
                                    <AddIcon/>
                                    Submit
                                </QWButton>
                            </Grid>
                            <Grid item>
                                <QWButton size={"small"} color={"primary"} variant={"contained"}>
                                    Small
                                </QWButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <h2>Modal</h2>
                        <Grid item>
                            <h4>Confirm</h4>
                            <QWButton onClick={openModalConfirmHandler} color={"primary"} variant={"outlined"}>Trigger
                                Confirm Modal</QWButton>
                        </Grid>
                        <Grid item>
                            <h4>Response</h4>
                            <Grid container spacing={8}>
                                <Grid item>
                                    <QWButton
                                        onClick={openModalErrorResponseHandler}
                                        variant={"outlined"}
                                        style={{
                                            color: selectedTheme.colors.orange,
                                            borderColor: selectedTheme.colors.orange
                                        }}
                                    >
                                        Trigger Error Response Modal
                                    </QWButton>
                                </Grid>
                                <Grid item>
                                    <QWButton
                                        onClick={openModalSuccessResponseHandler}
                                        variant={"outlined"}
                                        color={"primary"}
                                    >Trigger
                                        Success Response Modal</QWButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <h2>Notifications</h2>
                        <Grid item>
                            <h4>Primary</h4>
                            <Notification
                                type={"primary"}
                                message={"Lorem Ipsum has been the industry's standard dummy text"}
                            />
                        </Grid>
                        <Grid item>
                            <h4>Success</h4>
                            <Notification
                                type={"success"}
                                message={"Lorem Ipsum has been the industry's standard dummy text"}
                            />
                        </Grid>
                        <Grid item>
                            <h4>Info</h4>
                            <Notification
                                type={"info"}
                                message={"Lorem Ipsum has been the industry's standard dummy text"}
                            />
                        </Grid>
                        <Grid item>
                            <h4>Warning</h4>
                            <Notification
                                type={"warning"}
                                message={"Lorem Ipsum has been the industry's standard dummy text"}
                            />
                        </Grid>
                        <Grid item>
                            <h4>Danger</h4>
                            <Notification
                                type={"danger"}
                                message={"Lorem Ipsum has been the industry's standard dummy text"}
                            />
                        </Grid>
                    </Grid>

                    <Grid item>
                        <h2>Tags</h2>
                        <Grid item spacing={16} container>
                            <Grid item>
                                <Tag
                                    label={"Normal Tag"}
                                    handleDelete={()=>{console.log('delete')}}
                                />
                            </Grid>
                            <Grid item>
                                <Tag
                                    type={"active"}
                                    label={"Active Tag"}
                                    handleDelete={()=>{console.log('delete')}}
                                />
                            </Grid>
                            <Grid item>
                                <Tag
                                    label={"Other Tag"}
                                    handleDelete={()=>{console.log('delete')}}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <h2>Upload Zone</h2>
                        <UploadZone
                            handleAcceptedFile={(acceptedFiles)=> console.log(acceptedFiles)}
                        />
                    </Grid>

                    <ModalConfirm
                        open={openModalConfirm}
                        handleClose={closeModalConfirmHandler}
                        title={"Activation Successfully"}
                    />
                    <ModalResponse
                        message={"Opps! Looks like something is wrong"}
                        type={"error"}
                        open={openModalErrorResponse}
                        handleClose={closeModalErrorResponseHandler}
                    />
                    <ModalResponse
                        message={"It's Done!"}
                        type={"success"}
                        open={openModalSuccessResponse}
                        handleClose={closeModalSuccessResponseHandler}
                    />
                </Grid>
            </MuiThemeProvider>
        </Grid>
    );
}

export default App;
