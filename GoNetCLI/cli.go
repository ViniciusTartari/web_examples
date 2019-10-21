package main

import (
	"fmt"
	"github.com/urfave/cli"
	"log"
	"net"
	"os"
)

func main() {
	app := cli.NewApp()
	app.Name = "Website Lookup CLI"
	app.Usage = "Let's you query IPs, CNAMEs, MX records and Name Servers!"

	myflags := []cli.Flag{
		cli.StringFlag{
			Name:  "host",
			Value: "",
		},
	}

	app.Commands = []cli.Command{
		{
			Name:  "ns",
			Usage: "Looks up the Name Servers for a Particular Host",
			Flags: myflags,
			Action: func(c *cli.Context) error {
				ns, err := net.LookupNS(c.String("host"))
				if err != nil {
					fmt.Println(err)
					return err
				}
				for i := 0; i < len(ns); i++ {
					fmt.Println(ns[i].Host)
				}
				return nil
			},
		},
		{
			Name:  "ip",
			Usage: "Looks up the IP address for a Particular Host",
			Flags: myflags,
			Action: func(c *cli.Context) error {
				ip, err := net.LookupIP(c.String("host"))
				if err != nil {
					fmt.Println(err)
					return err
				}
				for i := 0; i < len(ip); i++ {
					fmt.Println(ip[i])
				}
				return nil
			},
		},
		{
			Name: "cname",
			Usage: "Looks up the CNAME for a Particular Host",
			Flags: myflags,
			Action: func(c *cli.Context) error {
				cname, err := net.LookupCNAME(c.String("host"))
				if err != nil {
					fmt.Println(err)
					return err
				}
				fmt.Println(cname)
				return nil
			},
		},
		{
			Name: "mx",
			Usage: "Looks up the MX records for a Particular Host",
			Flags: myflags,
			Action: func(c *cli.Context) error {
				mx, err := net.LookupMX(c.String("host"))
				if err != nil {
					fmt.Println(err)
					return err
				}
				for i:=0;i<len(mx);i++{
					fmt.Println(mx[i].Host)
				}
				return nil
			},
		},
		{
			Name: "addr",
			Usage: "Looks up the addr for a particular host",
			Flags: myflags,
			Action: func(c *cli.Context) error {
				addr, err := net.LookupAddr(c.String("host"))
				if err != nil {
					fmt.Println(err)
					return err
				}
				for i:=0;i<len(addr);i++{
					fmt.Println(addr[i])
				}
				return nil
			},
		},
		{
			Name: "host",
			Usage: "Looks up for a particular host",
			Flags: myflags,
			Action: func(c *cli.Context) error {
				host, err := net.LookupHost(c.String("host"))
				if err != nil {
					fmt.Println(err)
					return err
				}
				for i:=0;i<len(host);i++{
					fmt.Println(host[i])
				}
				return nil
			},
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		log.Fatal(err)
	}
}
