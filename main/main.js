let count = 0;
let menu_bar_width = [0.05, 0.15];

function OnCreate() {
    root = app.createLayout();
    app.addChild(root);
    
    main_lay = widget.Layout("center");
    main_lay.setBgGradientColor("linear-gradient", "to bottom", "#13B1FE 0%", "#BD82FE 65%", "#FE77FE 100%");
    main_lay.setWidth(1);
    main_lay.setHeight(1);
    root.addChild(main_lay);
    
    banner = widget.Layout();
    banner.setBgGradientColor("linear-gradient", "to bottom", "#FFFFFF24", "#FFFFFF48");
    banner.setWidth(1);
    banner.setHeight(0.3);
    main_lay.addChild(banner);
    
    menu_icon = widget.Layout("left", "center");
    menu_icon.setWidth(1);
    menu_icon.setHeight(0.07);
    banner.addChild(menu_icon);
    
    menu_bar1 = widget.Layout();
    menu_bar1.setBgColor("#FFFFFF");
    menu_bar1.setBorderRadius(12);
    menu_bar1.setMargin("0.5em 0 0 0.5em");
    menu_bar1.setOnClick(OnMenu);
    menu_bar1.setWidth(0.15);
    menu_bar1.setHeight(0.01);
    menu_bar1.setTransition("width 0.5s");
    menu_icon.addChild(menu_bar1);
    
    menu_bar2 = widget.Layout();
    menu_bar2.setBgColor("#FFFFFF");
    menu_bar2.setBorderRadius(12);
    menu_bar2.setMargin("0.5em 0 0 0.5em");
    menu_bar2.setOnClick(OnMenu);
    menu_bar2.setWidth(0.10);
    menu_bar2.setHeight(0.01);
    menu_icon.addChild(menu_bar2);
    
    menu_bar3 = widget.Layout();
    menu_bar3.setBgColor("#FFFFFF");
    menu_bar3.setBorderRadius(12);
    menu_bar3.setMargin("0.5em 0 0.5em 0.5em");
    menu_bar3.setOnClick(OnMenu);
    menu_bar3.setWidth(0.05);
    menu_bar3.setHeight(0.01);
    menu_bar3.setTransition("width 0.5s");
    menu_icon.addChild(menu_bar3);
    
    banner_title = widget.Paragraph(1);
    banner_title.setText("Anniversary");
    banner_title.setColor("#FFFFFF");
    banner_title.setFont("Balnuettes");
    banner_title.setFontSize(64);
    banner.addChild(banner_title);
    
    card1 = widget.Layout("center", "flex-start");
    card1.setBgColor("#FFFFFF");
    card1.setWidth(0.8);
    card1.setHeight(0.5);
    card1.setBorderRadius(24);
    card1.setPadding(1);
    main_lay.addChild(card1);
    
    second = widget.Image();
    second.getImage("main/asset/img/second.jpg");
    second.setWidth(320);
    second.setHeight(180);
    second.setBorderRadius(24);
    card1.addChild(second);
    
    card1_content = widget.Layout("left", "center");
    card1_content.setWidth();
    card1_content.setHeight(0.2);
    card1.addChild(card1_content);
    
    card1_title = widget.Heading(1);
    card1_title.setText("Hi, RENZTER");
    card1_title.setColor("#242424");
    card1_title.setFont("Poppins Black");
    card1_content.addChild(card1_title);
    
    card1_body = widget.Paragraph();
    card1_body.setText("I have surprised for you. Just enter the link below.");
    card1_body.setColor("#808080");
    card1_body.setFont("Poppins SemiBold");
    card1_content.addChild(card1_body);
    
    card1_view = widget.Layout("center", "center");
    card1_view.setWidth();
    card1_view.setHeight(0.05);
    card1.addChild(card1_view);
    
    view_page = widget.Hyperlink("NoUnderline");
    view_page.setText("VIEW PAGE");
    view_page.setColor("#13B1FE");
    view_page.setFont("Poppins Bold");
    view_page.setUrl("https://2nd.anniversary.tk")
    card1_view.addChild(view_page);
    
    drawer = widget.Drawer();
    drawer.setSize(0,1);
    drawer.setBorderRadius("0px 24px 24px 0px");
    main_lay.addChild(drawer);
    
    close_panel = widget.Layout("right");
    close_panel.setWidth();
    close_panel.setHeight(0.1);
    drawer.addChild(close_panel);
    
    close_btn = widget.Button();
    close_btn.setText("×");
    close_btn.setWidth(12);
    close_btn.setBorderRadius(48);
    close_btn.setBgColor("#00000000");
    close_btn.setColor("#0084FE");
    close_btn.setFontSize(48);
    close_btn.setOnClick(OnClose);
    close_btn.setFont("Poppins Bold");
    close_panel.addChild(close_btn);
    
    menu = widget.Layout("Center", "Center");
    menu.setWidth();
    menu.setHeight(0.9);
    drawer.addChild(menu);
    
    about = widget.Button();
    about.setText("About");
    about.setBgColor("#00000000");
    about.setFontSize(36);
    about.setColor("#13B1FE");
    about.setOnClick(About);
    about.setFont("Poppins Black");
    menu.addChild(about);
    
    about_dlg = widget.AlertDialog();
    about_dlg.setTitle("About");
    about_dlg.setBorderRadius(24);
    about_dlg.setTitleFontSize(24);
    about_dlg.setTitleFontColor("#13B1FE");
    about_dlg.setBgColor("#FFFFFF");
    about_dlg.setHeight(0.3);
    about_dlg.setOkButtonColor("#13B1FE");
    about_dlg.setOkButtonFont("Poppins Bold");
    about_dlg.setOnOk(AboutClose);
    root.addChild(about_dlg);
    
    about_aknowledgement = widget.Paragraph();
    about_aknowledgement.setText("Anniversary TK is an exclusive website created for my most beloved girlfriend, RENZTER.");
    about_aknowledgement.setColor("#242424");
    about_aknowledgement.setFontSize(18);
    about_aknowledgement.setFont("Poppins SemiBold");
    about_dlg.addChild(about_aknowledgement);
}

function OnMenu() {
    menu_bar1.setWidth(0.05);
    menu_bar3.setWidth(0.15);
   
    drawer.show();
}

function OnClose() {
    menu_bar1.setWidth(0.15);
    menu_bar3.setWidth(0.05);
    
    drawer.hide();
}

function About() {
    about_dlg.show();
}

function AboutClose() {
    about_dlg.hide();
}
