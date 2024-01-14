import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterGabri = () => {
    return (
        <footer className="p-1 bg-black text-light">
            <div className="p-1 text-secondary">
            <a class="text-secondary" href="https://www.facebook.com/netflixitalia/?locale=it_IT" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook p-1"></i></a>
            <a class="text-secondary" href="https://www.instagram.com/netflixit/?hl=it" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram p-1"></i></a>
            <a class="text-secondary" href="https://twitter.com/netflix" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter p-1"></i></a>
            <a class="text-secondary" href="https://www.youtube.com/channel/UCi_T2R1AzOCun4-PI4Or2ng" target="_blank" rel="noopener noreferrer"><i class="bi bi-youtube p-1"></i></a>
            </div>
            <div className="container py-4 fs-6">
            <div class="row">
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Audio and Subtitles</a>
                </div>
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Media Center</a>
                </div>
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Privacy</a>
                </div>
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Contact Us</a>
                </div>
                </div>
            <div class="row">
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Audio Description</a>
                </div>
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Investor Relations</a>
                </div>
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Legal Notices</a>
                </div>
                </div>
            <div class="row">
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Help Center</a>
                </div>
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Jobs</a>
                </div>
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Cookie Preferences</a>
                </div>
                </div>
            <div class="row">
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Gift Cards</a>
                </div>
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Terms of Use</a>
                </div>
                <div class="col-md-3">
                    <a class="text-secondary text-decoration-none fs-6" href="#" target="_blank" rel="noopener noreferrer">Corporate Information</a>
                </div>
            </div>
            </div>
            <button type="button" className="mx-5 mb-3 btn btn-outline-secondary">
                Service Code
            </button>
            <p className="mx-5 text-secondary  fs-6">&copy; 1997-2019 Netflix, Inc. &#123;i-0d00fcdafdf9c0de&#125;</p>
        </footer>
    );
};

export default FooterGabri;