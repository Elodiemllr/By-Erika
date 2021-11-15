import React from "react";

const homeContact = () => {
    return (
        <div className="homeContact">
            <div className="homeContact__title">
                <p>
                    personnalise ta box, laisse tes coordonnées pour être
                    recontacté
                </p>
                <h3>Emotion Garanti</h3>
            </div>

            <div class="row">
                <div class="col">
                    <label for="Name" class="fcf-label">
                        Nom et prénom
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Ecrire ici..."
                        aria-label="First name"
                    />
                </div>
                <div class="col">
                    <label for="Email" class="fcf-label">
                        Email
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Ecrire ici..."
                        aria-label="Last name"
                    />
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">
                        Envoyer votre demande
                    </button>
                </div>
            </div>
        </div>
    );
};

export default homeContact;
