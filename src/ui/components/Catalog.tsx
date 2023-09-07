import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import '../styles/Catalog.css';
import StorageProvider from "../../core/StorageProvider";

const Catalog: React.FC = () => {
    let defaultState: any[] = []
    const [photos, setPhotos] = useState(defaultState);

    useEffect(() => {
        setPhotos(StorageProvider.storage.retrieveCatalog())

        return () => {
        };
    }, []);

    return (
        <div className="catalog">
            <h1>SOLO anda el 3</h1>
            <div className="photos-container">
                {photos.map((photo) => !photo.revealed ? (
                        <Link
                            to={`/game/${photo.id}`}
                            key={photo.id}
                            className={`photo`}
                        >
                            <div className="incognito">?</div>
                        </Link>
                    ) : (
                        <div
                            key={photo.id}
                            className={`photo revealed`}
                        >
                            <img
                                src={`/images/${photo.name}.jpg`}
                                alt={`Photo ${photo.id}`}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Catalog;