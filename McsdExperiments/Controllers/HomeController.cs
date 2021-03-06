﻿using McsdExperiments.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace McsdExperiments.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View(new HomeViewModel());
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult Index(UserDataViewModel user)
        {

            return Json(user);
        }

        [HttpPost]
        public ActionResult ProcessSlider(HomeViewModel model)
        {
            model.SliderPosition += 10;
            return View("Index",model);
        }
    }
}