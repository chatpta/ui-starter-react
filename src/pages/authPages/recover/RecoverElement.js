import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Hidden } from "@material-ui/core";
import useRecoverElementStyle from "./RecoverElementStyle";


function RecoverElement() {
    const classes = useRecoverElementStyle();

    return (
        <div>
            <div className={ classes.root }>
                <div className={ classes.innerContainer }>
                    <div className={ classes.contactFormContainer }>
                        <h2 className={ classes.title }>Mot de passe oublié ?</h2>
                        <h4 className={ classes.title }>
                            Entrez le courriel associé à votre compte NiovarJobs ci-dessous.
                            <Hidden xsDown>
                                Vous recevrez un courriel avec un lien pour réinitialiser votre mot de passe.
                            </Hidden>
                        </h4>
                        <TextField
                            id="email"
                            variant="outlined"
                            placeholder={ "Veuillez saisir votre adresse email" }
                            color="primary"
                            size={ "small" }
                            fullWidth
                            className={ classes.textField }
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className={ classes.sendButton }
                            size={ "large" }
                            fullWidth
                        >
                            Rénitialiser mot de passe
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecoverElement;
