// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MovieApp from './MovieApp';
import Login from './Login';

export default function App() {
    const [userId, setUserId] = useState(null);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to={userId ? "/movies" : "/login"} />}
                />
                <Route
                    path="/login"
                    element={<Login setUserId={setUserId} />}
                />
                <Route
                    path="/movies"
                    element={userId ? <MovieApp userId={userId} /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
}
