import React,{useEffect, useState} from 'react'
import MainScreen from "../MainScreen/MainScreen";
import {Row,Col,Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../ErrorMessage";
import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../../actions/userActions";
import "./ProfileScreen.css"

const ProfileScreen = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo } =userLogin;

    const userUpdate = useSelector((state) => state.userUpdate);
    const { loading, error, success } =userUpdate;

    useEffect(() => {
        if(!userInfo){
            navigate("/")
        }else{
            setName(userInfo.name)
            setEmail(userInfo.email)
        }
    },[navigate,userInfo])

    const submitHandler = (e) => {
        e.preventDefault();

        if(password === confirmPassword){
            dispatch(updateProfile({name,email,password}))
        }
    }
  return (
    <MainScreen title="Profile">
      <div>
        <Row className="profileContainer">
          <Col md={6}>
            <Form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <br />
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <br />
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <br />
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <br />{" "}
              <Button type="submit" varient="primary" onClick={submitHandler}>
                Update
              </Button>
            </Form>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
}

export default ProfileScreen