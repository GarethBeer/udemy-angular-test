import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = "No server was created";
  serverName = "TestServer";
  serverCreated = false;
  servers = ["TestServer", "ServerG", "ServerG2"];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit(): void {}
  onCreateServer = () => {
    this.serverCreationStatus = "Server was created " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  };
  onUpdateServerName = (event: Event) => {
    this.serverName = (<HTMLInputElement>event.target).value;
  };
}
