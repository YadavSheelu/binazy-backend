import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../../../action/projectaction';
import { motion } from 'framer-motion';
import './Employees.css'; 

const EmployeesList = () => {
    const dispatch = useDispatch();
    const { employees = [], loading, error } = useSelector((state) => state.project);

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch]);

    return (
        <div className="quantum-employees">
          
            <div className="quantum-bg-nexus"></div>
            <div className="quantum-particle-field"></div>

            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="quantum-header"
            >
                <div className="quantum-header-inner">
                         <h1 className="quantum-main-title">
                           <span className="quantum-flare">MEET</span> 
                           <span className="quantum-pulse">BINAZY</span>
                           <span className="quantum-flare">TEAM</span>
                         </h1>
                         <motion.p
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.6 }}
                           className="quantum-subtitle"
                         >
                            We don’t just write code — we <span className="quantum-highlight">craft dimensions</span> of possibility.
                            </motion.p>
                         <div className="quantum-header-ornament"></div>
                       </div>
                <div className="quantum-header-ornament"></div>
            </motion.header>

            {/* Loading / Error / Employees */}
            {loading ? (
                <div className="quantum-load-state">
                    <div className="quantum-loader">
                        <div className="quantum-loader-core"></div>
                        <div className="quantum-loader-ring"></div>
                    </div>
                    <p className="quantum-load-text">Loading team members...</p>
                </div>
            ) : error ? (
                <div className="quantum-error-state">
                    <p className="quantum-error-text">Error fetching employee data: {error}</p>
                </div>
            ) : employees.length === 0 ? (
                <div className="quantum-empty-state">
                    <p className="quantum-empty-text">No employees found.</p>
                </div>
            ) : (
                <div className="quantum-employee-grid">
                    {employees.map((employee, index) => (
                        <motion.div
                            key={employee._id || index}
                            className="quantum-employee-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 255, 255, 0.2)' }}
                        >
                            <div className="quantum-card-energy"></div>

                            {/* Employee Avatar Image */}
                            <img
                                src={employee.profileImage}
                                alt={`${employee.firstName} ${employee.lastName}`}
                                className="employee-image"
                            />

                            <h3 className="quantum-employee-name">{`${employee.firstName} ${employee.lastName}`}</h3>
                            <p className="quantum-employee-position">{employee.position}</p>
                            <p className="quantum-employee-department">{employee.department}</p>
                            <p className="quantum-employee-status">
                                Status: <span className={employee.status === 'active' ? 'status-active' : 'status-inactive'}>{employee.status}</span>
                            </p>
                            <p className="quantum-employee-hire-date">
                                Hire Date: {new Date(employee.hireDate).toLocaleDateString()}
                            </p>
                            <div className="quantum-card-aura"></div>
                        </motion.div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default EmployeesList;
