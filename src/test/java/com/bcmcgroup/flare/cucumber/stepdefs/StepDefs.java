package com.bcmcgroup.flare.cucumber.stepdefs;

import com.bcmcgroup.flare.FlareClientGuiRewriteApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = FlareClientGuiRewriteApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
