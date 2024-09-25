import React, { Component } from "react";

class ErrorBoundary extends Component {
  //Error boundaries are used to catch and handle errors anywhere in the child component tree to prevent the whole app from crashing
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    //while in development the error screen is always shown but when in production it only shows an error in the part where this gets triggered
    return {
      hasError: true,
    };
  }
  //By default in development mode the info of the error gets shown
  componentDidCatch(error, info) {
    //gives us info and what the error was
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
